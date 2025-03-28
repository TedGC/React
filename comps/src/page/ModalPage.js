import { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

function ModalPage() {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>
    const modal = <Modal onClose={handleClose} actionBar={actionBar} >
        <p>
            important agreemnt for you to accept
        </p>
    </Modal>


    return (
        <div className='relative'>



            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor turpis a neque dictum laoreet sed in massa. Proin sed purus eget ex gravida facilisis. Nullam porta elementum tortor sed fringilla. Mauris sed ante nunc. Sed non augue tempus, bibendum lectus nec, malesuada ex. Duis cursus interdum erat, at semper magna vestibulum sit amet. Donec lacinia tortor est, a fringilla tortor dictum non. Nullam et lectus in odio tincidunt dignissim. Suspendisse potenti. In cursus elit dolor, malesuada scelerisque lectus aliquet ut.


            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor turpis a neque dictum laoreet sed in massa. Proin sed purus eget ex gravida facilisis. Nullam porta elementum tortor sed fringilla. Mauris sed ante nunc. Sed non augue tempus, bibendum lectus nec, malesuada ex. Duis cursus interdum erat, at semper magna vestibulum sit amet. Donec lacinia tortor est, a fringilla tortor dictum non. Nullam et lectus in odio tincidunt dignissim. Suspendisse potenti. In cursus elit dolor, malesuada scelerisque lectus aliquet ut.


            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor turpis a neque dictum laoreet sed in massa. Proin sed purus eget ex gravida facilisis. Nullam porta elementum tortor sed fringilla. Mauris sed ante nunc. Sed non augue tempus, bibendum lectus nec, malesuada ex. Duis cursus interdum erat, at semper magna vestibulum sit amet. Donec lacinia tortor est, a fringilla tortor dictum non. Nullam et lectus in odio tincidunt dignissim. Suspendisse potenti. In cursus elit dolor, malesuada scelerisque lectus aliquet ut.


            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor turpis a neque dictum laoreet sed in massa. Proin sed purus eget ex gravida facilisis. Nullam porta elementum tortor sed fringilla. Mauris sed ante nunc. Sed non augue tempus, bibendum lectus nec, malesuada ex. Duis cursus interdum erat, at semper magna vestibulum sit amet. Donec lacinia tortor est, a fringilla tortor dictum non. Nullam et lectus in odio tincidunt dignissim. Suspendisse potenti. In cursus elit dolor, malesuada scelerisque lectus aliquet ut.


            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor turpis a neque dictum laoreet sed in massa. Proin sed purus eget ex gravida facilisis. Nullam porta elementum tortor sed fringilla. Mauris sed ante nunc. Sed non augue tempus, bibendum lectus nec, malesuada ex. Duis cursus interdum erat, at semper magna vestibulum sit amet. Donec lacinia tortor est, a fringilla tortor dictum non. Nullam et lectus in odio tincidunt dignissim. Suspendisse potenti. In cursus elit dolor, malesuada scelerisque lectus aliquet ut.


            </p>
            <Button onClick={handleClick} primary>Open Modal</Button>

            {showModal && modal}
        </div>
    )
}

export default ModalPage