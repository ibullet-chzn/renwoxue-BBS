import parse from 'async-busboy'
import Router from 'koa-router'
import encapsulation from '../models/encapsulation'

import userCtrl from '../controllers/userCtrl'
import fileCtrl from '../controllers/fileCtrl'

const router = Router();

// api列表
router.post('/login', async(ctx, next) => {
  let loginResult = await userCtrl.login(ctx.request.body);
  if (loginResult.status === 0) {
    ctx.session = loginResult;
  }
  ctx.body = encapsulation.body('SUCCESS', loginResult);
});

router.post('/reg', async(ctx, next) => {
  let loginResult = await userCtrl.reg(ctx.request.body);
  if (loginResult.status === 0) {
    ctx.session = loginResult;
  }
  ctx.body = encapsulation.body('SUCCESS', loginResult);
});

router.post('/upload', async(ctx, next) => {
  const {files, fields} = await parse(ctx.req);
  let uploadReturnPath = await fileCtrl.upload(files, fields);
  ctx.body = encapsulation.body('SUCCESS', uploadReturnPath);
});

export default router
