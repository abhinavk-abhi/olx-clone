import React from 'react'
import { Carousel, Modal, ModalBody } from 'flowbite-react'
import mobile from '../../assets/mobile.svg'
import guitar from '../../assets/guita.png'
import love from '../../assets/love.png'
import avatar from '../../assets/avatar.png'
import close from '../../assets/close.svg'
import google from '../../assets/google.png'
import { signInWithPopup } from 'firebase/auth'
import { auth,provider } from '../../config/firebase.config'

const Login = ({ toggleModal, status }) => {

  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      toggleModal();
      console.log('User', result.user);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Modal
        theme={{
          "root": {
            "base": "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
            "show": {
              "on": "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
              "off": "hidden"
            },
            "sizes": {
              "md": "max-w-md"
            }
          },
          "content": {
            "base": "relative w-full p-4 h-auto",
            "inner": "relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow"
          },
        }}
        onClick={toggleModal}
        position={'center'}
        show={status}
        size="md"
        popup={true}
      >
        <div onClick={(event) => event.stopPropagation()} className="p-6 pl-4 pr-4 bg-white rounded-t-lg">
          <img onClick={toggleModal} className="w-5 absolute z-10 top-5 right-5 cursor-pointer" src={close} alt="" />
          <Carousel
            slide={false}
            theme={{
              "indicators": {
                "active": {
                  "off": "bg-gray-300",
                  "on": "bg-teal-400"
                },
                "base": "h-2 w-2 rounded-full",
                "wrapper": "absolute bottom-3 left-1/2 flex -translate-x-1/2 space-x-3"
              },
              "scrollContainer": {
                "base": "flex h-full overflow-hidden",
                "snap": ""
              },
              "control": {
                "base": "inline-flex items-center justify-center bg-transparent group",
                "icon": "w-6 text-gray-400 group-hover:text-gray-600"
              },
              "item": {
                "base": "duration-700 ease-in-out",
                "wrapper": {
                  "off": "w-full flex-shrink-0",
                  "on": "w-full flex-shrink-0"
                }
              }
            }}
            onClick={(event) => { event.stopPropagation() }}
            className="w-full h-72 pb-8"
            style={{ position: 'relative' }}
          >
            <div
              className="flex flex-col items-center justify-center h-full px-4"
              style={{ width: '100%', flexShrink: 0 }}
            >
              <img className="w-24 mb-6" src={guitar} alt="Car Image 1" />
              <p style={{ color: '#002f34' }} className="w-64 text-center text-base font-semibold leading-snug">Help us become one of the safest place to buy and sell.</p>
            </div>

          </Carousel>
        </div>

        <ModalBody className="bg-white p-0 rounded-none" onClick={(event) => { event.stopPropagation() }} >
          <div className="px-6 pb-6 pt-2">
            <div className="flex items-center justify-start rounded-md border-2 border-solid border-black p-3 pl-4 mb-3 cursor-pointer hover:border-teal-600 transition-colors">
              <img className="w-5 mr-3" src={mobile} alt="" />
              <p className="text-sm font-semibold">Continue with phone</p>
            </div>
            <div className="flex items-center justify-center rounded-md border border-solid border-gray-300 p-3 cursor-pointer hover:bg-gray-50 transition-colors relative" onClick={handleClick}>
              <img className="w-5 absolute left-4" src={google} alt="" />
              <p className="text-sm text-gray-600 font-normal">Continue with Google</p>
            </div>
            <div className="pt-4 flex flex-col items-center justify-center">
              <p className="font-semibold text-xs text-gray-500">OR</p>
              <p className="font-semibold text-sm pt-3 underline underline-offset-4 cursor-pointer hover:text-teal-600">Login with Email</p>
            </div>
            <div className="pt-12 flex flex-col items-center justify-center">
              <p className="text-xs text-center text-gray-600">All your personal details are safe with us.</p>
              <p className="text-xs pt-4 text-center text-gray-600">If you continue, you are accepting <span className="text-blue-600 cursor-pointer hover:underline">OLX Terms and Conditions and Privacy Policy</span></p>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default Login