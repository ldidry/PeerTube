import * as Bull from 'bull'
import { logger } from '../../../helpers/logger'
import { Emailer } from '../../emailer'

export type EmailPayload = {
  to: string[]
  subject: string
  text: string

  fromDisplayName?: string
  replyTo?: string
}

async function processEmail (job: Bull.Job) {
  const payload = job.data as EmailPayload
  logger.info('Processing email in job %d.', job.id)

  return Emailer.Instance.sendMail(payload)
}

// ---------------------------------------------------------------------------

export {
  processEmail
}
