import { Injectable } from '@angular/core';

import {SensitivityPolicy} from "../shared/sensitivity-policy";

@Injectable()
export class MedicalInformationService {

  constructor() { }

  sensitivityPoliciesStatusToUnChecked(sensitivityPolicies:SensitivityPolicy[]){
    for(let sp of sensitivityPolicies){
      sp['checked'] = false;
    }
  }

  updateSensitivitiesPoliciesStatus(sensitivityPoliciesCodes:string[], sensitivityPolicies:SensitivityPolicy[]){
    this.sensitivityPoliciesStatusToUnChecked(sensitivityPolicies);
    for(let spc of sensitivityPoliciesCodes){
      for(let sp of sensitivityPolicies){
        if(spc === sp.code.toString()){
          sp['checked'] = true;
          break;
        }
      }
    }
  }

  setSenetivityPoliciesStatusToUnChecked(sensitivityPolicies:SensitivityPolicy[]){
    for(let sp of sensitivityPolicies){
      sp['checked'] = false;
    }
  }

  setSensitivityPoliciesStatusToChecked(sensitivityPolicies:SensitivityPolicy[]){
    for(let sp of sensitivityPolicies){
      sp['checked'] = true;
    }
  }
  getSelectedSensitivityPoliciesCode(sensitivityPolicies:SensitivityPolicy[]):string[]{
    let selected:string[] =  new Array();
    for(let sp of sensitivityPolicies){
      if( sp['checked']){
        selected.push(sp.code.toString());
      }
    }
    return selected;
  }

  getSelectedSensitivityPolicies(sensitivityPolicies:SensitivityPolicy[]):SensitivityPolicy[]{
    let selected:SensitivityPolicy[] =  new Array();
    for(let sp of sensitivityPolicies){
      if( sp['checked']){
        selected.push(sp);
      }
    }
    return selected;
  }
}