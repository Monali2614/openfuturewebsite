import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolutionsComponent } from './solutions/solutions.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { SapComponent } from './sap/sap.component';
import { PythonComponent } from './python/python.component';
import { LinuxComponent } from './linux/linux.component';
import { GooglecloudComponent } from './googlecloud/googlecloud.component';
import { DatascienceComponent } from './datascience/datascience.component';
import { AwscloudComponent } from './awscloud/awscloud.component';
import { CustomDigitalPlatformComponent } from './custom-digital-platform/custom-digital-platform.component';
import { CloudDataSolutionComponent } from './cloud-data-solution/cloud-data-solution.component';
import { SeamlessUserExperienceComponent } from './seamless-user-experience/seamless-user-experience.component';
import { CybersecurityComplianceComponent } from './cybersecurity-compliance/cybersecurity-compliance.component';
import { ECommerceGrowthComponent } from './e-commerce-growth/e-commerce-growth.component';
import { AiMachineLearningComponent } from './ai-machine-learning/ai-machine-learning.component';
import { BusinessAutomationSolutionComponent } from './business-automation-solution/business-automation-solution.component';
import { AzureCloudComponent } from './azure-cloud/azure-cloud.component';
import { DataEngComponent } from './data-eng/data-eng.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { DataanylistComponent } from './dataanylist/dataanylist.component';
import { DevopsComponent } from './devops/devops.component';
import { ECommercedevelopmentComponent } from './e-commercedevelopment/e-commercedevelopment.component';
import { JavafullstackComponent } from './javafullstack/javafullstack.component';
import { MobileappdevelopmentComponent } from './mobileappdevelopment/mobileappdevelopment.component';
import { PowerbiComponent } from './powerbi/powerbi.component';
import { UxComponent } from './ux/ux.component';
import { SoftwaredeveloperComponent } from './softwaredeveloper/softwaredeveloper.component';
import { SoftwaretestingComponent } from './softwaretesting/softwaretesting.component';
import { WebsiteDevelopmentComponent } from './website-development/website-development.component';
import { DigitalmarketingComponent } from './digitalmarketing/digitalmarketing.component';

const routes: Routes = [

   {path:'',component:HomeComponent},
   {path:'solutions',component:SolutionsComponent},
   {path:'navbar',component:NavbarComponent},
   {path:'slider',component:SliderComponent},
   {path:'services',component:ServicesComponent},
   {path:'aboutus',component:AboutusComponent},
   {path:'footer',component:FooterComponent},
   {path:'sap',component:SapComponent},
   {path:'python',component:PythonComponent},
   {path:'linux',component:LinuxComponent},
   {path:'googlecloud',component:GooglecloudComponent},
   {path:'datascience',component:DatascienceComponent},
   {path:'awscloud',component: AwscloudComponent},
   {path:'cdf',component: CustomDigitalPlatformComponent},
   {path:'cds',component: CloudDataSolutionComponent},
   {path:'aiml',component: AiMachineLearningComponent},
   {path:'sue',component:SeamlessUserExperienceComponent},
   {path:'csc',component:CybersecurityComplianceComponent},
   {path:'bas',component:BusinessAutomationSolutionComponent},
   {path:'ecg',component:ECommerceGrowthComponent},
   
   {path:'azure-cloud',component:AzureCloudComponent},
   {path:'data-eng',component:DataEngComponent},
   {path:'cyber-security',component: CyberSecurityComponent},
   {path:'dataanylist',component: DataanylistComponent},
   {path:'devops',component: DevopsComponent},
   {path:'digitalmarketing',component: DigitalmarketingComponent},
   {path:'e-commercedevelopment',component: ECommercedevelopmentComponent},
   {path:'javafullstack',component: JavafullstackComponent},
   {path:'mobileappdevelopment',component: MobileappdevelopmentComponent},
   {path:'powerbi',component: PowerbiComponent},
   {path:'ux',component: UxComponent},
   {path:'softwaredeveloper',component: SoftwaredeveloperComponent},
   {path:'softwaretesting',component: SoftwaretestingComponent},
   {path:'website-development',component:WebsiteDevelopmentComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
