import React from 'react'
import {Modal} from 'flowbite-react'

const Login = ({toggleModal,status}) => {
  return (
    <div>
        <Modal theme={{
            "content":{
                "base" : "relative w-full p-4 md:h-auto",
                "inner" : "relative flex max-h-[900dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700"
            }
        }} onClick={toggleModal} show={status}>
            <div>Modalllllllllllllllllllll</div>
        </Modal>
    

    </div>
  )
}

export default Login

