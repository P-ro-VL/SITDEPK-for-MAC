import yaml from 'js-yaml'

export default class SubjectModule {

    static availableSubjects = []

    loadSubjects() {
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", () => {
            if (oReq.status==200)
            {
                var rawData = yaml.load(oReq.responseText)
                Object.values(rawData.Available).forEach(data => {
                    this.availableSubjects.push(this.parseObject(data))
                });
                console.log(this.availableSubjects)
            }
            else
                throw new Error(oReq.statusText);
            }
        );
        oReq.open("GET", "https://raw.githubusercontent.com/P-ro-VL/SITDE-PK-BANKS/main/Data/SubjectCodes.yml");
        oReq.send();
    }

    parseObject(data){
        return {
            name: data.Name,
            enable: data.Enable,
            theory: data.Theory,
            type: data.Type,
            questions: data.Questions
        }
    }
}