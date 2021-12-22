const register = require('../controllers/user/register');
const login = require('../controllers/user/login');
const addBook = require('../controllers/book.js/addBook');
const deleteBook = require('../controllers/book.js/deleteBook');
const getBook = require('../controllers/book.js/getBook');
const getAllBooks = require('../controllers/book.js/getAllBooks');
const order = require('../controllers/order/makeOrder');
const router = require('express').Router();
const RouterGuard = require('../middleware/auth');
const getOrderDetails = require('../controllers/order/getOrders');

router.route('/register').post(register.register);
router.route('/login').get(login.login);
router.route('/addBook').post(RouterGuard,addBook.add);
router.route('/order').post(RouterGuard,order.makeorder);
router.route('/getOrderDetails').get(RouterGuard,getOrderDetails.orderDetails);
router.route('/getBook/:id').get(RouterGuard,getBook.getBook)
router.route('/deleteBook/:id').get(RouterGuard,deleteBook.remove);
router.route('/getBooks').get(RouterGuard,getAllBooks.getBooks)

module.exports = router