import React from 'react';
import "./Profile.css"
import person from "../profileImgs/person.png"
import badge from "../profileImgs/badge.png"
import info from "../profileImgs/info.png"
import contact from "../profileImgs/contact.png"
import gift from "../profileImgs/gift.png"
import trade from "../profileImgs/trade.png"
import profileImg from "../profileImgs/profileImg.png"
import call from "../pharmacyImgs/call.png"
import clock from "../pharmacyImgs/clock.png"

const Profile = () => {
    return (
        <div>
            <div className='profile-head'>
                <p className='first-title'>პირადი პროფილი</p>
                <p className='sec-title'>მთავარი / პირადი პროფილი</p>
            </div>

            
            
            <div className='profile-sections'>
                <div className='person-info'>
                    <div className='person-info-categorys'>
                        <img src={person} alt="person" className='icons' />
                        <p className='piradi-info'>პირადი ინფორმაცია</p>
                    </div>
                    <div className='person-info-categorys'>
                        <img src={badge} alt="badge" className='icons' />
                        <p>მტრედი ბარათის ქულების შემოწმება</p>
                    </div>
                    <div className='person-info-categorys'>
                        <img src={trade} alt="trade" className='icons' />
                        <p>მტრედი ბარათის ანგარიშზე მიბმა</p>
                    </div>
                    <div className='person-info-categorys'>
                        <img src={gift} alt="gift" className='icons' />
                        <p>საჩუქრის არჩევა ქულების მიხედვით</p>
                    </div>
                    <div className='person-info-categorys'>
                        <img src={contact} alt="contact" className='icons' />
                        <p>მისამართების მართვა</p>
                    </div>
                    <div className='person-info-categorys'>
                        <img src={info} alt="info" className='icons' />
                        <p>ინფორმაცია შეკვეთებზე</p>
                    </div>
                </div>

                <div className='profile-form'>
                    <h2>პირადი ინფორმაციის რედაქტირება</h2>
                    <div className='profileImg'>
                        <img src={profileImg} alt="profileImg" />
                        <p>შეცვალე სურათი</p>
                    </div>
                    <form>
                        <p>ტელეფონის ნომერი:</p>
                        <br />
                        <input type="text" placeholder='577777777' /> 
                        <br />
                        <p>ელ-ფოსტა:</p>
                        <br />
                        <input type="mail" placeholder='anna.kvernadze11@geolab.edu.ge'/>
                        <br />
                        <p>მისამართი:</p>
                        <br />
                        <input type="text" placeholder='თბილისი, პოლიტკოვსკაიას ქ. 3' />
                    </form>
                </div>
            </div>

            <div className='grafiki'>
                <p>აფთიაქების მუშაობის გრაფიკი:</p>
                <div className='days'>
                    <div className='clock-day'>
                        <img src={clock} alt="clock" className='clock' />
                        <p> ორშ - პარ: 10:30 - 21:00 </p>
                    </div>    
                    <p className='shabat-kvira'>შაბ: 10:30 - 21:00</p>
                    <p className='shabat-kvira'>კვ: 10:30 - 21:00</p>
                </div>
                <div className='call'>
                    <p>დახმარებისთვის დაგვიკავშირდით:</p>
                    <img src={call} alt="call"  className='call-icon'/>
                    <p>2 900 800</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
