import { type RouteMeta as VRouteMeta } from 'vue-router';

declare module 'vue-router' {
  interface RouteMeta extends VRouteMeta {
    title?: string
    hidden?: boolean
  }
  interface _RouteRecordBase {
    hidden?: boolean,
    title?: string,
    key?: string
    extra?: boolean
  }
}
