import React ,{Component} from 'react';
import axios from 'axios'; 
import {WorkSection , WorkTitle , WorkSpan , WorkPart , Icon, PartTitle, Line , PartDesc }  from './style.js';

class Work extends Component{ 

    state ={
        works:[]
    }
    componentDidMount() {
        axios.get('js/data.json').then(res => {this.setState({ works: res.data.works})} )
    }
    render(){
        const {works} = this.state;
        const workList = works.map( (worksItem) =>{
            return(
                <WorkPart first={worksItem.id} key={worksItem.id} >
                <Icon className={worksItem.icon_name}></Icon>
                <PartTitle>{worksItem.title}</PartTitle>
                <Line />
                <PartDesc>
                   {worksItem.body}
                </PartDesc>
            </WorkPart>
            

            );
        })

    return( 
        

        <WorkSection>
              <div className="container">
                  <WorkTitle><WorkSpan>My</WorkSpan> Work</WorkTitle>
              {workList}
              </div>
          </WorkSection>
          
      );
  
   }
    }

 
export default Work;
