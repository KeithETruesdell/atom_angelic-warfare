'use babel';

import AngelicWarfareForAtomView from './angelic-warfare-for-atom-view';
import { CompositeDisposable } from 'atom';

export default {

  angelicWarfareForAtomView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.angelicWarfareForAtomView = new AngelicWarfareForAtomView(state.angelicWarfareForAtomViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.angelicWarfareForAtomView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'angelic-warfare-for-atom:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.angelicWarfareForAtomView.destroy();
  },

  serialize() {
    return {
      angelicWarfareForAtomViewState: this.angelicWarfareForAtomView.serialize()
    };
  },

  toggle() {
    console.log('AngelicWarfareForAtom was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  },

  toggle2() {
    console.log('hello world');
    return(
      this.modalPanel.isVisible() ? this.modalPanel.hide() : this.modalPanel.show()
    );
  }

};
