export class TableBuilder {

    constructor() {
        this.tableRows = "";
    }
    
    createTableBody(user) {
        this.tableRows += `<tr>
                                <td>${user.name}</td>
                                <td>${user.email}</td>
                                <td>
                                    <div id="accordion" role="tablist" aria-multiselectable="true">
                                        <div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="headingOne">
                                                <h6 class="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#user${user.id}" aria-expanded="true" aria-controls="user${user.id}">
                                                        Детально о пользователе ${user.name}
                                                    </a>
                                                </h6>
                                            </div>
                                        <div id="user${user.id}" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                            ID: ${user.id}<br>
                                            Имя: ${user.name}<br>
                                            NickName: ${user.username}<br>
                                            Email: ${user.email}<br>
                                            Адрес: г. ${user.address.city},<br>
                                                ул. ${user.address.street},<br>
                                                кв. ${user.address.suite},<br>
                                                индекс ${user.address.zipcode},<br>
                                                географические координаты: широта ${user.address.geo.lat}, долгота ${user.address.geo.lng}<br>
                                            Телефон: ${user.phone}
                                            Website: ${user.website}
                                            Информация о компании: ${user.company.name}, слоган ${user.company.catchPhrase}, bs ${user.company.bs}
                                        </div>
                                    </div>
                            </tr>`;
    }
}