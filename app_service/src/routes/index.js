import Router from 'koa-router'
import encapsulation from '../models/encapsulation'

import demoCtrl from '../controllers/demoCtrl'

const router = Router();

// api列表
router.post('/login', async(ctx, next) => {
  let loginResult = await demoCtrl.login(ctx.request.body);
  if (loginResult.status === 0) {
    ctx.session = loginResult;
  }
  ctx.body = encapsulation.body('SUCCESS', loginResult);
});

router.post('/reg', async(ctx, next) => {
  let loginResult = await demoCtrl.login(ctx.request.body);
  if (loginResult.status === 0) {
    ctx.session = loginResult;
  }
  ctx.body = encapsulation.body('SUCCESS', loginResult);
});

export default router
