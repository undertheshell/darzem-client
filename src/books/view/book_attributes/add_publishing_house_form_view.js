import React, { useState } from "react";

export const AddPublishingHouseForm = (props) => {
    const [publishingHouse, setPublishingHouse] = useState({
        name: "",
        country: "",
        city: "",
        email: ""
    });

    return (
        <form onSubmit={ (e) => { e.preventDefault(); props.onAddAttribute(publishingHouse.name, publishingHouse.country, publishingHouse.city, publishingHouse.email) } } className="d-flex flex-column align-items-center justify-content-between" style={{ height: "20rem" }}>
            <span><b>Добавление издательства</b></span>
            <div className="form-group">
                <span>Название издательства</span>
                <input type={'text'}
                    className="border-1 form-control"
                    style={{backgroundColor: "#f5f5f5"}}
                    placeholder={'название'}
                    value={publishingHouse.name}
                    required
                    onChange={ (e) => { setPublishingHouse({...publishingHouse, name: e.target.value}) } }/>
            </div>

            <div className="border-1 form-control">
                <select className="form-select border-0"
                        style={{backgroundColor: "#f5f5f5"}}
                        onChange={event => setPublishingHouse({...publishingHouse, country: event.target.value })}
                        required>
                    <option value="" disabled selected>Страна</option>
                    {props.bookAttributes.countries.map( (country) => { return ( <option key={country.country_id} value={country.country_id}>{country.name}</option> ) } )}
                </select>
            </div>

            <div className="form-group">
                <span>Город</span>
                <input type={'text'}
                    className="border-1 form-control"
                    style={{backgroundColor: "#f5f5f5"}}
                    placeholder={'город'}
                    value={publishingHouse.city}
                    required
                    onChange={ (e) => { setPublishingHouse({...publishingHouse, city: e.target.value}) } }/>
            </div>

            <div className="form-group">
                <span>Email</span>
                <input type={'email'}
                    className="border-1 form-control"
                    style={{backgroundColor: "#f5f5f5"}}
                    placeholder={'email'}
                    value={publishingHouse.email}
                    required
                    onChange={ (e) => { setPublishingHouse({...publishingHouse, email: e.target.value}) } }/>
            </div>

            <button className="align-self-end btn btn-primary mx-auto ">Добавить издательство</button>
        </form>
    );
} 