import React from 'react';
import classes from './Footer.module.css';
import Button from '../Button/Button';

const Footer = () => {
    return (
        <section className={classes.footer_container}>
            <div className={classes.footer_img_container}>
                <h1>Ready to order?</h1>
                <Button class_name="btn_dark">ORDER NOW</Button>
            </div>
            <div className={classes.footer_contact_container}>
                <h2>dine</h2>
                <p>Vilnius, Lithuania, +37069999999</p>
                <h3>Open Times</h3>
                <p>MON - FRI: 09:00 AM - 10:00 PM</p>
                <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
            </div>
        </section>
    )
}

export default Footer
