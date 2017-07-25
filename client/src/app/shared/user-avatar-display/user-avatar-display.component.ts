import {Component, Input, OnInit} from "@angular/core";
import {UtilityService} from "../utility.service";
import {isNullOrUndefined} from "util";
import {AvatarImage} from "../../user-avatar/shared/avatar-image.model";
import {UserAvatarMonitoringService} from "../user-avatar-monitoring.service";

@Component({
  selector: 'c2s-user-avatar-display',
  templateUrl: './user-avatar-display.component.html',
  styleUrls: ['user-avatar-display.component.scss']
})
export class UserAvatarDisplayComponent implements OnInit {
  private DEFAULT_AVATAR_IMG_URI: string = "assets/img/generic-avatar-sm-48.png";

  avatarImgDataUri: string;

  constructor(private userAvatarMonitoringService: UserAvatarMonitoringService) {
    this.avatarImgDataUri = this.DEFAULT_AVATAR_IMG_URI;

    this.userAvatarMonitoringService.userAvatarSource
      .subscribe(
        (currentAvatar: AvatarImage) => {
          if ((!isNullOrUndefined(currentAvatar)) && (!isNullOrUndefined(currentAvatar.fileContents))) {
            this.avatarImgDataUri = UtilityService.base64ToString(currentAvatar.fileContents);
          } else {
            this.avatarImgDataUri = this.DEFAULT_AVATAR_IMG_URI;
          }
        },
        () => {
          this.avatarImgDataUri = this.DEFAULT_AVATAR_IMG_URI;
        });
  }

  ngOnInit(): void {
    this.userAvatarMonitoringService.triggerGetAvatarImage();
  }

}
