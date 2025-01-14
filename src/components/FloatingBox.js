import React from 'react';
import { motion } from 'framer-motion';

/**
 * Composant FloatingBox qui anime ses enfants avec un effet de flottement.
 *
 * @param {Object} props - L'objet des propriétés.
 * @param {React.ReactNode} props.children - Le contenu à afficher à l'intérieur de la boîte flottante.
 * @returns {JSX.Element} Le composant de boîte flottante animée.
 */
const FloatingBox = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="floating-box"
        >
            {children}
        </motion.div>
    );
};

export default FloatingBox;
