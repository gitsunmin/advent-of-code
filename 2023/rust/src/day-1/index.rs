use regex::Regex;
use std::fs;

fn read_input() -> String {
    return fs::read_to_string("src/../../inputs/day1.txt")
        .expect("Something went wrong reading the file");
}

fn parse_input(input: String) -> Vec<String> {
    return input
        .split("\n")
        .map(|x| x.to_string())
        .collect::<Vec<String>>();
}

fn solve_part_1(input: Vec<String>) -> i32 {
    let regex_only_number = Regex::new(r"\d").unwrap();
    return input
        .iter()
        .map(|x| {
            regex_only_number
                .find_iter(x)
                .map(|y| y.as_str())
                .collect::<Vec<_>>()
        })
        .map(|x| vec![x[0], x[x.len() - 1]].join("").parse::<i32>().unwrap())
        .sum::<i32>();
}
fn solve_part_2(input: Vec<String>) -> i32 {
    return input
        .iter()
        .map(|x| {
            let new_input = &x.to_string();
            let new_r_input = &x.to_string().chars().rev().collect::<String>();

            let first = (Regex::new(r"\d|one|two|three|four|five|six|seven|eight|nine")
                .unwrap()
                .find_iter(new_input)
                .map(|y| match y.as_str() {
                    "one" => "1",
                    "two" => "2",
                    "three" => "3",
                    "four" => "4",
                    "five" => "5",
                    "six" => "6",
                    "seven" => "7",
                    "eight" => "8",
                    "nine" => "9",
                    _ => y.as_str(),
                })
                .collect::<Vec<_>>())[0];

            let second = (Regex::new(r"\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin")
                .unwrap()
                .find_iter(new_r_input)
                .map(|y| match y.as_str() {
                    "eno" => "1",
                    "owt" => "2",
                    "eerht" => "3",
                    "ruof" => "4",
                    "evif" => "5",
                    "xis" => "6",
                    "neves" => "7",
                    "thgie" => "8",
                    "enin" => "9",
                    _ => y.as_str(),
                })
                .collect::<Vec<_>>())[0];

            return [first, second].join("").parse::<i32>().unwrap();
        })
        .sum::<i32>();
}

pub fn run() -> (i32, i32) {
    let input = read_input();

    let parsed_input = parse_input(input);

    return (
        solve_part_1(parsed_input.clone()),
        solve_part_2(parsed_input),
    );
}
