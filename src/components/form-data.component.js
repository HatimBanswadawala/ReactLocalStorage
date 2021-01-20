import React, {Component} from 'react';
import {Modal, ModalHeader, ModalFooter, ModalBody, Table} from 'reactstrap';

export default class FormDataComponent extends Component{
    userdata;
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeDesignation = this.onChangeDesignation.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeResume = this.onChangeResume.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeZip = this.onChangeZip.bind(this);
        this.onChangeSkills = this.onChangeSkills.bind(this);
        this.onChangeExp = this.onChangeExp.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            phone: '',
            designation: '',
            imageName: 'Upload Image',
            image: null,
            resume: null,
            resumeName: 'Upload Resume',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            skills: '',
            experience: ''
        }

    }
  

    toggleModal(){
        this.setState({
            modalIsOpen: ! this.state.modalIsOpen
        });
    }

   
    onChangeImage(e){
        this.setState({
            imageName: e.target.files[0].name,
            image: URL.createObjectURL(e.target.files[0])
        })
    }

    onChangeResume(e){
        this.setState({
            resumeName: e.target.files[0].name,
            resume: URL.createObjectURL(e.target.files[0])
        })
    }

    onChangeName(e){
        this.setState({name: e.target.value})
    }

    onChangePhone(e){
        this.setState({phone: e.target.value})
    }

    onChangeDesignation(e){
        this.setState({designation: e.target.value})
    }

    onChangeAddress(e){
        this.setState({address: e.target.value})
    }

    onChangeCity(e){
        this.setState({city: e.target.value})
    }

    onChangeState(e){
        this.setState({state: e.target.value})
    }

    onChangeZip(e){
        this.setState({zipcode: e.target.value})
    }

    onChangeSkills(e){
        this.setState({skills: e.target.value})
    }

    onChangeExp(e){
        this.setState({experience: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        window.location.reload(true);
        this.setState({
            name: '',
            phone: '',
            designation: '',
            image: null,
            imageName: 'Upload Image',
            resume: null,
            resumeName: 'Upload Resume',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            skills: '',
            experience: ''
        })
    }

    //React Lifecycle

    componentDidMount(){   
        this.userData = JSON.parse(localStorage.getItem('user'));

        if(localStorage.getItem('user')){
            this.setState({
                name: this.userData.name,
                phone: this.userData.phone,
                designation: this.userData.designation,
                image: this.userData.image,
                imageName: this.userData.imageName,
                resume: this.userData.resume,
                resumeName: this.userData.resumeName,
                address: this.userData.address,
                city: this.userData.city,
                state: this.userData.state,
                zipcode: this.userData.zipcode,
                skills: this.userData.skills,
                experience: this.userData.experience
            })
        }
        else{
            this.setState({
                name: '',
                phone: '',
                designation: '',
                image: null,
                imageName: 'Upload Image',
                resume: null,
                resumeName: 'Upload Resume',
                address: '',
                city: '',
                state: '',
                zipcode: '',
                skills: '',
                experience: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    render(){
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>


                    <div class="form-group row">
                    <div className="col-4">
                    <label>Name</label>
                    <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div className="col-4">
                    <label>Job Position/ Designation</label>
                    <input type="text" className="form-control" value={this.state.designation} onChange={this.onChangeDesignation} />
                    </div>
                    <div className="col-4">
                    <label>Profile Image</label>
                    <div className="custom-file">
                    <input type="file" name="file" onChange={(e)=>this.onChangeImage(e)} class="custom-file-input"/>
                    <label class="custom-file-label" for="validatedCustomFile" >{this.state.imageName}</label>    
                    </div>
                    </div>
                    </div>


                    <div className="form-group row">
                    <div className="col-4">
                        <label>Address</label>
                        <input type="text" className="form-control" value={this.state.address}  onChange={this.onChangeAddress} />
                    </div>
                    <div className="col-4">
                        <label>Contact</label>
                        <input type="tel" className="form-control" value={this.state.phone}  onChange={this.onChangePhone} />
                    </div>
                    <div className="col-4">
                    <label>Resume</label>
                    <div className="custom-file">
                    <input type="file" name="file" onChange={(e)=>this.onChangeResume(e)} class="custom-file-input"/>
                    <label class="custom-file-label" for="validatedCustomFile" >{this.state.resumeName}</label>    
                    </div>
                    </div>
                    </div>

                    <div className="form-group row">
                    <div className="col-8">
                        <label> Education | Experience | Internships | Certifications</label>
                         <textarea className="form-control" rows="3" value={this.state.experience} onChange={this.onChangeExp} ></textarea>
                    </div>
                    <div className="col-4">
                        <label> Skill Set</label>
                         <textarea className="form-control" rows="3" value={this.state.skills} onChange={this.onChangeSkills}></textarea>
                    </div>
                    </div>

                    <div class="form-group row">
                    <div className="col-4">
                    <label>City</label>
                    <input type="text" className="form-control" value={this.state.city} onChange={this.onChangeCity} />
                    </div>
                    <div className="col-4">
                    <label>State</label>
                    <select class="form-control" value={this.state.state} onChange={this.onChangeState}>
                    <option value="" selected disabled>Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>

                    </select>
                    </div>
                    <div className="col-4">
                    <label>ZipCode</label>
                    <input type="text" className="form-control" value={this.state.zipcode} onChange={this.onChangeZip} />
                    </div>
                    </div>
                    <br></br>
                    <div class="form-group row">
                    <div className="col-3"></div>
                    <div className="col-3"><button type="button" className="btn btn-primary btn-block" onClick={this.toggleModal.bind(this)}>View Record</button></div>
                    <div className="col-3"><button type="submit" className="btn btn-primary btn-block">Clear Record</button></div>
                    </div>
                    
                    
                </form>
                
                <Modal isOpen={this.state.modalIsOpen}>
                    <ModalHeader toggle={this.toggleModal.bind(this)}><span style={{marginLeft: "180px"}}>Job Profile</span></ModalHeader>
                    <ModalBody>
                    <Table>
                        <thead>
                            {/* <tr>
                            <th scope="col">Applicant Details</th>
                            <th scope="col">First</th>
                            </tr> */}
                        </thead>
                        <tbody>
                            <tr>
                             <th scope="row"></th>
                            <td colSpan="3"><span style={{marginLeft: "80px"}}>
                                <img alt={this.state.imageName} src={this.state.image} width="230px" height="230px"></img>
                                </span></td>
                            </tr>
                            <tr>
                            <th scope="row">&nbsp;</th>
                            <td>Name</td>
                            <td>{this.state.name}</td>
                            </tr>
                            <tr>
                            <th scope="row">&nbsp;</th>
                            <td>Designation</td>
                            <td>{this.state.designation}</td>
                            </tr>
                            <tr>
                            <th scope="row">&nbsp;</th>
                            <td>Skill Set</td>
                            <td>{this.state.skills}</td>
                            </tr>
                            <tr>
                            <th scope="row">&nbsp;</th>
                            <td>Education | Experience</td>
                            <td>{this.state.experience}</td>
                            </tr>
                            <tr>
                            <th scope="row">&nbsp;</th>
                            <td>Contact</td>
                            <td>{this.state.phone}</td>
                            </tr>
                            <tr>
                            <th scope="row">&nbsp;</th>
                            <td>Address</td>
                            <td>{this.state.address}</td>
                            </tr>
                            <tr>
                            <th scope="row">&nbsp;</th>
                            <td>City</td>
                            <td>{this.state.city}</td>
                            </tr>
                            <tr>
                            <th scope="row">&nbsp;</th>
                            <td>State</td>
                            <td>{this.state.state}</td>
                            </tr>
                            <tr>
                            <th scope="row">&nbsp;</th>
                            <td>ZipCode</td>
                            <td>{this.state.zipcode}</td>
                            </tr>
                            <tr>
                            <th scope="row">&nbsp;</th>
                            <td>Resume</td>
                            <td><a href={this.state.resume}>{this.state.resumeName}</a></td>
                            </tr>
                        </tbody>
                        </Table>
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </Modal>
            </div>
            
        )
    }
}