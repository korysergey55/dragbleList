import {
  makeAutoObservable,
  observable,
  action,
  reaction,
  toJS,
  configure,
  computed,
  runInAction,
} from 'mobx'

class ItemsStore {
  @observable titleId: string = ''
  @observable activeTitle: boolean = false

  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.titleId,
      _ => console.log('mobx', toJS(this.titleId))
    )
  }
  @action setTitleId(data: string) {
    this.titleId = data
  }
  @action setActiveTitle() {
    this.activeTitle = !this.activeTitle
  }
}

export default new ItemsStore()
