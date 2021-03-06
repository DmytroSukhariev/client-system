 interface CompanyInfoForData {
    logo:string,
    description:string
}

 const ArrayCompanyData:Array<CompanyInfoForData> = [
     {
         logo:"Yandex",
         description:`
            Российская транснациональная компания, 
            зарегистрированная в Нидерландах и владеющая одноимённой системой поиска в Сети,
            интернет-порталами и службами в нескольких странах. 
            Наиболее заметное положение занимает на рынках России, Турции, Белоруссии и Казахстана.
         `
     },
     {
         logo:"Google",
         description:`
            Американская транснациональная корпорация, 
            реорганизованная 15 октября 2015 года в международный конгломерат Alphabet Inc., 
            компания в составе холдинга Alphabet, 
            инвестирующая в интернет-поиск, облачные вычисления и рекламные технологии. 
            Google поддерживает и разрабатывает ряд интернет-сервисов и продуктов 
            и получает прибыль в первую очередь от рекламы через свою программу Ads.
         `
     },
     {
         logo:"Youtube",
         description:`Видеохостинг, предоставляющий пользователям услуги хранения, 
         доставки и показа видео. 
         YouTube стал популярнейшим видеохостингом и вторым сайтом в мире по количеству посетителей.`
     },

]

 export {CompanyInfoForData,ArrayCompanyData}