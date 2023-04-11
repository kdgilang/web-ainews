import { Dialog, Transition } from '@headlessui/react'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { SUBSCRIBE_API_PATH } from '@src/consts/pathApi'
import classNames from '@src/helpers/classNames'
import { ISubscriberModel } from '@src/models/subscriberModel'
import { BasePropsType } from "@src/types/basePropsType"
import { FormEvent, Fragment, useState } from 'react'

export type SubscribeFormType = BasePropsType & {
  isMinimal?: boolean
}

export default function SubscribeForm({ className, isMinimal }: SubscribeFormType) {
  const [email, setEmail] = useState('')
  const [busy, setBusy] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<EventTarget>) => {
    e.preventDefault()

    if (busy) return
    setErrorMessage('')
    setBusy(true)

    const newSubscriber: ISubscriberModel = { email, firstName: '', lastName: ''}
    const res = await (await fetch(SUBSCRIBE_API_PATH, {
      method: 'POST',
      body: JSON.stringify(newSubscriber)
    })).json()
    
    if(res?.errors) {
      setErrorMessage(res.errors?.email?.message)
    } else if(res.code === 11000) {
      setErrorMessage('Email address is already exists.')
    } else {
      setIsOpenModal(true)
    }

    setBusy(false)
  }

  return (
    <div className={classNames(
        "relative isolate overflow-hidden bg-slate-700 rounded ",
        isMinimal ? "py-6" : "py-16",
        `${className}`
    )}>
      <div className={classNames(
          "mx-auto",
          isMinimal ? "w-full px-6" : " max-w-7xl px-6 lg:px-8"
      )}>
        <div className={classNames(
              "mx-auto",
              isMinimal ? "w-full" : "grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2"
            )}>
          <div className={classNames(
              isMinimal ? "w-full" : "max-w-xl lg:max-w-lg"
            )}>
            { isMinimal ? <h3 className="text-md font-bold text-white">Get daily news updates to your inbox!</h3> :
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2> }
            <p className={classNames(
              "mt-2 text-gray-300",
              isMinimal ? "text-sm" : "mt-4 text-lg leading-8"
            )}>
              Subscribe to our mailing list to receives daily updates!
            </p>
            <form
              onSubmit={(e) => { handleSubmit(e) }}
              className={classNames(
                "flex mt-6 gap-x-4",
                isMinimal ? "w-full flex-column" : "flex-row max-w-md"
            )}>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="text"
                autoComplete="email"
                value={email}
                onChange={ (e) => {
                  setEmail(e.target.value)
                  setErrorMessage('')
                } }
                className={classNames(
                  "min-w-0 flex-auto text-white rounded border px-3.5 py-2 focus:ring-1 sm:text-sm sm:leading-6",
                  errorMessage ? 'border-red bg-red/5' : 'border-green/40 bg-white/5'
                )}
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none transition rounded bg-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
                disabled={busy}
              >
                { busy ? 'Processing': 'Subscribe' }
              </button>
            </form>

            { errorMessage && <p className="mt-2 text-xs italic text-white font-bold">*{errorMessage}</p> }
          </div>
          { !isMinimal && 
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
              </dd>
            </div>
          </dl> }
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#1b8415] to-[#1b8415] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <Transition appear show={isOpenModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-100"
          open={isOpenModal}
          onClose={() => setIsOpenModal(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-900 bg-opacity-80" aria-hidden="true" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md rounded transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-slate-900"
                  >
                    Subscribe successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-slate-600">
                      Thank you for subscribing to our newsletter.
                      As a subscriber, you will be the first to know about our latest products, upcoming events, and industry insights. We value your trust and appreciate your interest in our company.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded border border-transparent px-4 py-2 text-sm font-medium text-slate-900 hover:bg-green/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setIsOpenModal(false)}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}