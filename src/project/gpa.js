import React, { Component } from 'react';
import '../project/gpa.css'

class GPA extends Component {
    constructor() {
        super();
        this.state = {
            gpa: 0,

        }


    }

    change() {
        //credits
        let c1 = Number(document.getElementById("c1").value);
        let c2 = Number(document.getElementById("c2").value);
        let c3 = Number(document.getElementById("c3").value);
        let c4 = Number(document.getElementById("c4").value);
        let c5 = Number(document.getElementById("c5").value);
        let c6 = Number(document.getElementById("c6").value);
        let c7 = Number(document.getElementById("c7").value);
        let c8 = Number(document.getElementById("c8").value);
        let c9 = Number(document.getElementById("c9").value);
        let c10 = Number(document.getElementById("c10").value);
        let c11 = Number(document.getElementById("c11").value);
        let c12 = Number(document.getElementById("c12").value);

        //grades
        let s1 = Number(document.getElementById("s1").value);
        let s2 = Number(document.getElementById("s2").value);
        let s3 = Number(document.getElementById("s3").value);
        let s4 = Number(document.getElementById("s4").value);
        let s5 = Number(document.getElementById("s5").value);
        let s6 = Number(document.getElementById("s6").value);
        let s7 = Number(document.getElementById("s7").value);
        let s8 = Number(document.getElementById("s8").value);
        let s9 = Number(document.getElementById("s9").value);
        let s10 = Number(document.getElementById("s10").value);
        let s11 = Number(document.getElementById("s11").value);
        let s12 = Number(document.getElementById("s12").value);

        let csum = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + c10 + c11 + c12;

        let top = s1 * c1 + s2 * c2 + s3 * c3 + s4 * c4 + s5 * c5 + s6 * c6 + s7 * c7 + s8 * c8 + s9 * c9 + s10 * c10 + s11 * c11 + s12 * c12;

        let fgpa = top / csum;


        this.setState({
            gpa: this.state.gpa + 1,
            csum: csum,
            fgpa: fgpa

        })

    }
    reset() {
        this.setState({
            gpa: 0,

        })
    }
    render() {
        return (
            <center> <div className='gpa' >
                <div><h1>GPA Calculator(R20 Regulation  )</h1></div>
                <div className='space'></div>
                <div className='main'>
                    <br></br>
                    <div className='heading'><span>Subjects</span>    <span>Credits</span>  <span>Grade</span></div><br></br>

                    <div className='subj'>Subject01:<input id="c1" type="number"></input><input id="s1" type="text"></input></div>
                    <div className='subj'>Subject02:<input id="c2" type="number"></input><input id="s2" type="text"></input></div>
                    <div className='subj'>Subject03:<input id='c3' type="number"></input><input id="s3" type="text"></input></div>
                    <div className='subj'>Subject04:<input id='c4' type="number"></input><input id="s4" type="text"></input></div>
                    <div className='subj'>Subject05:<input id='c5' type="number"></input><input id="s5" type="text"></input></div>
                    <div className='subj'>Subject06:<input id='c6' type="number"></input><input id="s6" type="text"></input></div>
                    <div className='subj'>Subject07:<input id='c7' type="number"></input><input id="s7" type="text"></input></div>
                    <div className='subj'>Subject08:<input id='c8' type="number"></input><input id="s8" type="text"></input></div>
                    <div className='subj'>Subject09:<input id='c9' type="number"></input><input id="s9" type="text"></input></div>
                    <div className='subj'>Subject10:<input id='c10' type="number"></input><input id="s10" type="text"></input></div>
                    <div className='subj'>Subject11:<input id='c11' type="number"></input><input id="s11" type="text"></input></div>
                    <div className='subj'>Subject12:<input id='c12' type="number"></input><input id="s12" type="text"></input></div><br></br>
                </div>
                <div className='space'></div>
                <button className='submit' onClick={() => this.change()}>Submit</button>

                <h1>Your SGPA is: {this.state.fgpa}</h1>


            </div></center >
        );
    }
}

export default GPA;