import React, { Component } from 'react'
import Select from 'react-select'

export default class Course extends Component {
    Select = require('react-select')

    renderUniversityOptions = () => {
        // const customStyles = {
        //     option: (provided, state) => ({
        //       ...provided,
        //       borderBottom: '1px dotted pink',
        //       color:  'red' ,
        //       padding: 20,
              
        //     }),
        //     control: () => ({
        //       // none of react-select's styles are passed to <Control />
        //       width: 200,
        //     }),
        //     singleValue: (provided, state) => {
        //       const opacity = state.isDisabled ? 0.5 : 1;
        //       const transition = 'opacity 300ms';
          
        //       return { ...provided, opacity, transition };
        //     }
        //   }

        let uniOptions = this.props.universities.map((university) => {
            return {
                value: university.name,
                label: university.name,
                key: university.id,
                id: university.id
            }
        })

        uniOptions.unshift({value: 'Select your university...',
        label: 'Select your university...',
        key: 999999,
        id: 999999,
        rating: 'disabled'})

        console.log(uniOptions, 'uni')
        return (<div>
            <Select placeholder={'Select your university...'}isOptionDisabled={(option) => option.rating === 'disabled'} options={uniOptions} onChange={this.props.handleUniversitySelect}>
                {/* <option value="" disabled selected>Select your university...</option>
                        {this.props.universities.map((university) => {
                            return <option key={university.id} id={university.id} value={university.name}>{university.name}</option>
                        })} */}
            </Select><br />
        </div>)
    }

    renderStudyOptions = () => {
        const { studies } = this.props
         

            const studyOptions = studies ? studies.map((study) => {
                return {
                    value: study.name,
                    label: study.name,
                    key: study.id,
                    id: study.id
                }
            })
            : []
        console.log(studyOptions, 'study')


        const disabled = [{
                value: "",
                label: 'First select your university',
                rating: 'disabled',
                key: 1
                
        }]

        return (
            studies === null ?
                <div >
                    <Select placeholder={'First select your university'}isOptionDisabled={(option) => option.rating === 'disabled'}options= {disabled}  isDisabled >
                        {/* <option value="" disabled selected>First select your university</option> */}
                    </Select><br />
                </div>
                :
                <div >

                    <Select placeholder={'Select your study...'}options={studyOptions} onChange={this.props.handleStudySelect}>
                        {/* <option value="" disabled selected>Select your study...</option>
                        {this.props.studies.map((studie) => {
                            return <option key={studie.id} id={studie.id} value={studie.name}>{studie.name}</option>
                        })} */}
                    </Select><br />
                </div>
        )
    }

    render() {
        return (
            <div 
            // className="half-width ai-start"
            >
                <form className=""
                    onSubmit={this.props.onSubmit}>
                    {this.renderUniversityOptions()}
                    {this.renderStudyOptions()}
                    {/* {study && study.name !== null &&  */}
                    <input type="submit" value="Find your course" className=" form-control form-control-sm btn-blue-xl" />

                </form>
            </div>
        )
    }
}

//     render() {
//         const uniOptions = this.props.universities.map((university)=> {
//             return {value: university.name, 
//                     label: university.name,
//                     key: university.id,
//                     id: university.id
//                 }
//         })

//         const studyOptions = this.props.studies.map((study) => {
//             return {value: study.name,
//                     label: study.name,
//                     key: study.id,
//                     id: study.id}
//         })

//         return (
//             <div className="half-width ai-start">
//                 <form className="" onSubmit={this.props.onSubmit}>
//                 <Select
//                 options={uniOptions}
//                 >
//                </Select>

//                 <Select
//                 options={studyOptions}
//                 >

//                 </Select>
//                 </form>
//             </div>
//         )
//     }
// }