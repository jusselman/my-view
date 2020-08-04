import React from 'react';
import './Modal.css';
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = e => {
        if (e.target.classList.contains('Background')) {
            setSelectedImg(null);
        }
    }

    return (
        <motion.div className="Background" onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img src={selectedImg} alt="Photo Enlarged"
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
            />
        </motion.div>
    )
}

export default Modal;
