var CR = CR || {};

CR.StandardClick = function () {
    this.id = "";
    this.baseLink = 'http://api.dribbble.com/shots/';

    this.setId = function (id) {
        this.id = id;
    };
    this.getId = function () {
        return this.id;
    };
    this.getOpen = function () {
        console.log(this.baseLink + this.id);
        window.open(this.baseLink + this.id);
    }
};

CR.ClickList = function () {
    CR.StandardClick.apply(this, arguments);

    this.click2082858 = function (id) {
        console.log(id);
        this.setId(id);
        this.getOpen();
    };

    this.click2082180 = function (id) {
        console.log(id);
        this.setId(id);
        this.getOpen();
    };

    this.click2082993 = function (id) {
        console.log(id);
        this.setId(id);
        this.getOpen();
    };
};
CR.clickList = new CR.ClickList();

CR.clickFactory = function () {
    CR.clickList['click' + this.dataset.id](this.dataset.id);
};

$('.btn-click').click(CR.clickFactory);