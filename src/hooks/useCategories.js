import React, { useEffect, useState } from 'react'
import { fetchCategories } from '../api/fetchCategories';

const useCategories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {

        const getCategories = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        getCategories();
    }, []);
    return { categories }
}

export default useCategories