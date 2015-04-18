import caseDash from "../case-dash";
import assert from "assert";


describe("case-dash", function() {
    var tests = [
            ["T", ["T"]],
            ["t", ["t"]],
            ["Test", ["Test"]],
            ["test", ["test"]],
            ["this-Is-A-Test", ["this", "Is", "A", "Test"]],
            ["This-Is-A-Test", ["This", "Is", "A", "Test"]],
            ["THIS-Is-A-Test", ["THIS", "Is", "A", "Test"]]
        ];

    describe("#parse()", function() {
        tests.forEach(function(pair) {
            var name = pair[0],
                parsed = pair[1];

            it(JSON.stringify(name) + " -> " + JSON.stringify(parsed), function() {
                assert.deepEqual(caseDash.parse(name), parsed);
            });
        });
    });

    describe("#stringify()", function() {
        tests.forEach(function(pair) {
            var name = pair[0],
                parsed = pair[1];

            it(JSON.stringify(parsed) + " -> " + JSON.stringify(name), function() {
                assert.equal(caseDash.stringify(parsed), name);
            });
        });
    });

    describe("#is()", function() {
        tests.forEach(function(pair) {
            var name1 = pair[0],
                parsed = pair[1],
                name2 = pair[1].join("#"),
                val1 = parsed.length > 1;

            it(JSON.stringify(name1) + " (" + val1 + ")", function() {
                assert.equal(caseDash.is(name1), val1);
            });
            it(JSON.stringify(name2) + " (false)", function() {
                assert.equal(caseDash.is(name2), false);
            });
        });
    });
});
