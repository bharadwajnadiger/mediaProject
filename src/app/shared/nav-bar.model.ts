export class NavBarModel {
    name: string;
    buttons?: Settings[];
    settings?: Settings[];
}

export class Settings {

    name?: string;
    icon?: string;
    urlPath?: string;

}