import "./ServiceSchedulingPage.scss";

function ServiceSchedulingPage () {
    return ( 
    <>
    <h3>Scheduling Page</h3>

<div>
    <label htmlFor="selectedService">Select the service: </label>
    <select name="selectedService" id="selectedService">
        <option>Please select required service</option>
        <option value="Beauty Treatments" >Beauty Treatments</option>
        <option value="Plumber" >Plumber</option>
        <option value="Carpenter" >Carpenter</option>
        <option value="Electrician" >Electrician</option>
    </select>
    </div>

    <div>
    <label htmlFor="selectedServiceProvider">Select the service provider: </label>
    <select name="selectedServiceProvider" id="selectedServiceProvider">
        <option>Please select preffered service provider</option>
        <option value="Bob" >Bob</option>
        <option value="Clob" >Clob</option>
        <option value="Dobb" >Dobb</option>
        <option value="Phoebe" >Phoebe</option>
    </select>
    </div>
    </>
     )
}

export default ServiceSchedulingPage;