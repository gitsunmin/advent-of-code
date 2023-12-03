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
    let regex_only_number = Regex::new(r"one|two|three|four|five|six|seven|eight|nine").unwrap();

    fn get_number(input: &str) -> &str {
        match input {
            "one" => "1",
            "two" => "2",
            "three" => "3",
            "four" => "4",
            "five" => "5",
            "six" => "6",
            "seven" => "7",
            "eight" => "8",
            "nine" => "9",
            _ => "0",
        }
    }

    return input
        .iter()
        .map(|x| {
            regex_only_number
                .find_iter(x)
                .map(|y| get_number(y.as_str()))
                .collect::<Vec<_>>()
        })
        .filter(|x| x.len() > 0)
        .map(|x| vec![x[0], x[x.len() - 1]].join("").parse::<i32>().unwrap())
        .sum::<i32>();
}

pub fn run() -> (i32, i32) {
    let input = read_input();

    let parsed_input = parse_input(input);

    return (
        solve_part_1(parsed_input.clone()),
        solve_part_2(parsed_input.clone()),
    );
}
