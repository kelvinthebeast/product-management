const Product = require("../../models/product.model");









// [get] /admin/products

module.exports.index = async (req, res) => {
    let filterStatus = [
    {
        name: "Tất cả",
        status: "",
        class: ""

    },
    {
        name: "Hoạt động",
        status: "active",
        class: ""

    },
    {
        name: "Dừng hoạt động",
        status: "inactive",
        class: ""
    }
    ]
    if(req.query.status){
        const index = filterStatus.findIndex(item => item.status == req.query.status);
        console.log(index);
        filterStatus[index] = "active";
    }
    else{
        const index = filterStatus.findIndex(item => item.status == "");
        
        filterStatus[index] = "active";
}
    let find = {
      deleted: false,
    
    };
    if(req.query.status){
        find.status = req.query.status;

    }
    const products = await Product.find(find);
    console.log(products);


    res.render("admin/pages/products/index.pug", {
        pageTitle: "Trang danh sách sản phẩm",
        // truyen data vao giao dien 
        products: products,
        filterStatus: filterStatus
    });
}