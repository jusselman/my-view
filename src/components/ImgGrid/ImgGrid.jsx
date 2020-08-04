import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import './ImgGrid.css';

const ImgGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');
    console.log(docs);

    return (
        <div className="ImgGrid">
            {docs && docs.map(doc => (
                <motion.div
                    className="ImgWrap"
                    key={doc.id}
                    onClick={() => setSelectedImg(doc.url)}
                    whileHover={{ opacity: 1 }}
                    layout
                >
                    <motion.img src={doc.url} alt="Image Upload"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImgGrid;
