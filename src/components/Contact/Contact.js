import React from 'react'
import style from './Contact.module.css'

const contact = props => (
    <div className={style.ContactContainer} id="Contact">
        <h2><strong><u>CONTACT</u></strong></h2>
        <div className={style.Contact}>
            <p>Vous souhaitez me contacter ? Dans ce cas vous pouvez m'envoyer un mail à l'adresse <strong>valentinlmr28@gmail.com</strong> ou au <strong>06.40.44.46.07</strong> et je veillerai à vous répondre dans les plus brefs délais.</p>
            <div className={style.ListReseau}>
                <p>Vous pouvez également me retrouver sur les sites suivants !</p>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <i class="fab fa-github-square"></i>
                    <i class="fab fa-linkedin"></i>
                </div>
            </div>
        </div>
    </div>
)

export default contact