'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Franz => {
  const getMessages = function getMessages() {
    // get unread messages
    const count = document.querySelectorAll('.guilds-wrapper .badge').length;

    // set Franz badge
    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);

  // Hide download message
  Franz.injectCSS(_path2.default.join(__dirname, 'service.css'));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2NvcmQvd2Vidmlldy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiRnJhbnoiLCJnZXRNZXNzYWdlcyIsImNvdW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwic2V0QmFkZ2UiLCJsb29wIiwiaW5qZWN0Q1NTIiwiam9pbiIsIl9fZGlybmFtZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUFBLE9BQU9DLE9BQVAsR0FBa0JDLEtBQUQsSUFBVztBQUMxQixRQUFNQyxjQUFjLFNBQVNBLFdBQVQsR0FBdUI7QUFDekM7QUFDQSxVQUFNQyxRQUFRQyxTQUFTQyxnQkFBVCxDQUEwQix3QkFBMUIsRUFBb0RDLE1BQWxFOztBQUVBO0FBQ0FMLFVBQU1NLFFBQU4sQ0FBZUosS0FBZjtBQUNELEdBTkQ7O0FBUUE7QUFDQUYsUUFBTU8sSUFBTixDQUFXTixXQUFYOztBQUVBO0FBQ0FELFFBQU1RLFNBQU4sQ0FBZ0IsZUFBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLGFBQXJCLENBQWhCO0FBQ0QsQ0FkRCIsImZpbGUiOiJkaXNjb3JkL3dlYnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxubW9kdWxlLmV4cG9ydHMgPSAoRnJhbnopID0+IHtcbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSBmdW5jdGlvbiBnZXRNZXNzYWdlcygpIHtcbiAgICAvLyBnZXQgdW5yZWFkIG1lc3NhZ2VzXG4gICAgY29uc3QgY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3VpbGRzLXdyYXBwZXIgLmJhZGdlJykubGVuZ3RoO1xuXG4gICAgLy8gc2V0IEZyYW56IGJhZGdlXG4gICAgRnJhbnouc2V0QmFkZ2UoY291bnQpO1xuICB9O1xuXG4gIC8vIGNoZWNrIGZvciBuZXcgbWVzc2FnZXMgZXZlcnkgc2Vjb25kIGFuZCB1cGRhdGUgRnJhbnogYmFkZ2VcbiAgRnJhbnoubG9vcChnZXRNZXNzYWdlcyk7XG5cbiAgLy8gSGlkZSBkb3dubG9hZCBtZXNzYWdlXG4gIEZyYW56LmluamVjdENTUyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnc2VydmljZS5jc3MnKSk7XG59O1xuIl19