import createRouter, { loggerPlugin } from 'router5'
import browserPlugin from 'router5/plugins/browser';
import listenersPlugin from 'router5/plugins/listeners';
import routes from './routes'

export default function initRouter (useListenersPlugin = false) {
  const router = createRouter(routes)
    .setOption('defaultRoute', 'inbox')
    // Plugins
    .usePlugin(browserPlugin({
      useHash: true
    }))
    .usePlugin(loggerPlugin())
    .usePlugin(historyPlugin())

  if (useListenersPlugin) {
    router.usePlugin(listenersPlugin())
  }

  return router
}
