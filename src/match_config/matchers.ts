import { FormGroup } from "@angular/forms";
import CustomMatcher = jasmine.CustomMatcher;
import CustomMatcherResult = jasmine.CustomMatcherResult;

export const customMatchers: jasmine.CustomMatcherFactories = {
 toBeValidForm :function(_util: jasmine.MatchersUtil) {
        return {
            compare: function (actual: FormGroup, expected: boolean): CustomMatcherResult {

                // Your checks here.
                const passes = actual.valid === expected;

                // Result and message generation.
                return {
                    pass: passes,
                    message: passes ? `Form is validating correctly`
                                    : `Form validation: ${actual.valid} \nExpected validation: ${expected}\nValues: ${JSON.stringify(actual.getRawValue())}\nReasons: ${JSON.stringify(actual.errors)}`,
                }
            }
        }
    }
};