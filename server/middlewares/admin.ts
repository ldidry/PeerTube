import { logger } from '../helpers'

function ensureIsAdmin (req, res, next) {
  const user = res.locals.oauth.token.user
  if (user.isAdmin() === false) {
    logger.info('A non admin user is trying to access to an admin content.')
    return res.sendStatus(403)
  }

  return next()
}

// ---------------------------------------------------------------------------

export {
  ensureIsAdmin
}
