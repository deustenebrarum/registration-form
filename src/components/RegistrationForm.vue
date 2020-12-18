<template>
    <form class="reg">
        <h2>Регистрация</h2>
        <div class="reg__info grid-column-triple">
            <input type="text" id="firstname" placeholder="Имя*">
            <input type="text" id="lastname" placeholder="Фамилия*">
            <input type="text" id="secondname" placeholder="Отчество">
        </div>
        <div class="grid-column-triple">
            <div class="reg__phonenumber">
                <pre>Номер телефона: </pre>
                <input type="tel" id="phonenumber" placeholder="+7 (999) 000-00-00">
            </div>
            <span></span>
            <div class="reg__birthday">
                <pre>Дата рождения: </pre>
                <input type="date" id="birthday">
            </div>
        </div>
        <div class="reg__sex">
            <pre>Пол: </pre>
            <div class="reg__sex__select grid-column-triple">
                <span>
                    <label for="male">Мужской</label>
                    <input type="radio" name="sex" id="male">
                </span>
                <null></null>
                <span>
                    <label for="female">Женский</label>
                    <input type="radio" name="sex" id="female">
                </span>
            </div>
        </div>
        <div class="grid-column-triple">
            <div class="reg__client-group">
                <pre>Группа клиента: </pre>
                <select name="" id="client-groups">
                    <option value="1">VIP</option>
                    <option value="2">Проблемные</option>
                    <option value="3">ОМС</option>
                </select>
            </div>
            <div class="reg__doctor">
                <pre>Лечащий врач: </pre>
                <div class="grid-column-triple reg_doctor_selector">
                    <div>
                        <label for="1">Иванов</label>
                        <input type="radio" id="1">
                    </div>
                    <div>
                        <label for="2">Захаров</label>
                        <input type="radio" id="2">
                    </div>
                    <div>
                        <label for="3">Чернышева</label>
                        <input type="radio" id="3">
                    </div>
                </div>
            </div>
            <span></span>
            <div class="reg__sms-checkbox">
                <pre>Согласны на отправление СМС: </pre>
                <input type="checkbox" name="" id="sms-checkbox">
            </div>
        </div>
        <div class="reg__address" id="address">
            <h3>Адрес: </h3>
            <div class="grid-column-triple">
                <div class="reg__country">
                    <pre>Страна: </pre>
                    <input type="text" id="country">
                </div>
                <div class="reg__unit">
                    <pre>Область: </pre>
                    <input type="text" id="unit">
                </div>
                <div class="reg__index">
                    <pre>Индекс: </pre>
                    <input type="text" id="index">
                </div>
                <div class="reg__city">
                    <pre>Город: </pre>
                    <input type="text" id="city">
                </div>
                <div class="reg__street">
                    <pre>Улица: </pre>
                    <input type="text" id="street">
                </div>
                <div class="reg__house">
                    <pre>Дом: </pre>
                    <input type="text" id="house">
                </div>
            </div>
        </div>
        <div class="reg__document" id="document">
            <h3>Документ: </h3>
            <div class="grid-column-triple">
                <div>
                    <pre>Тип документа*: </pre>
                    <input type="text" id="document-type" placeholder="Паспорт">
                </div>
                <div>
                    <pre>Серия: </pre>
                    <input type="text" id="document-serial" placeholder="9212">
                </div>
                <div>
                    <pre>Номер: </pre>
                    <input type="text" id="document-number" placeholder="555444">
                </div>
                <div>
                    <pre>Кем выдан: </pre>
                    <input type="text" id="document-giver" placeholder="Отделением Уфинского района">
                </div>
                <div>
                    <pre>Дата выдачи*: </pre>
                    <input type="text" id="document-date" placeholder="01.01.2010">
                </div>
            </div>
        </div>
    </form>
</template>

<style scoped lang="sass">
  @import "../styles/RegistrationForm.sass"
</style>