export type Param = string | number | Object
export interface Event {
  _type: string
  [k: string]: any
}
