export interface IFolderData {
  key: string
  label: string
  children?: IFolderData[]
}

export interface ICommon {
  openedItems: string[]
  content: IFolderData | null
  onChange: (id: string) => void
  onChangeContent: (value: IFolderData) => void
}
