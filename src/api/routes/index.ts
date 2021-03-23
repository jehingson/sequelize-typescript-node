import router from 'express'

import HomeRouter from './client/Home.router'

const apiRouter = router()

apiRouter.use(HomeRouter)

export default apiRouter;