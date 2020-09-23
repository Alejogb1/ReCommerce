import React, {useContext, useEffect} from 'react'
import { ShopContext } from "../context/ShopContext"

export default function HomePage() {

    const {fetchAllProducts, products} = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
        return () => {
            // cleanup
        };
    }, [fetchAllProducts])

    return (
        <div>
            <h1>Home</h1>
        </div>
    )

}