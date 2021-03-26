import React from 'react'
// Belajar propstate
const MenuMakanan = (props) => {
    return (
        <React.Fragment>
            <ol>
                <li>Nama Makanan : {props.namaMakanan} </li>
                <li>Harga Makanan :{props.hargaMakanan} </li>

            </ol>

        </React.Fragment>
    )
}
export default MenuMakanan;