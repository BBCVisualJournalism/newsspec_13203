/** @jsx React.DOM */
define([
    'bootstrap',
    'lib/vendors/react/react-0.13.2.min'
    ], function (news, React) {

        var heading = React.createClass({
            render: function () {
                return (
                    <p>Percentage of pupils achieving Level 4 in reading, writing and maths</p>
                );
            }
        });

        return heading;
    });
