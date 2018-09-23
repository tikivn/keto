package ladon.regex

import data
import data.ladon.core as core
import data.ladon.condition as condition
import input as request

default allow = false

allow {
    decide_allow(data.policies.regex, data.roles)
}

decide_allow(policies, roles) {
	effects := [effect | effect := policies[i].effect
	        matcher(policies[i].resources, request.resource)
	        match_subjects(policies[i].subjects, roles, request.subject)
	        matcher(policies[i].actions, request.action)

			condition.all_conditions_true(policies[i])
		]

    count(effects, c)
    c > 0

	core.effect_allow(effects)
}

matcher(patterns, compare) {
    pattern := patterns[_]
    regex.template_match(pattern, compare, "<", ">", output)
    output == true
}

match_subjects(matches, roles, subject) {
    matcher(matches, subject)
} {
    role := roles[subject][_]
    matcher(matches, role)
}
