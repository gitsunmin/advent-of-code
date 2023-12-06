use regex::Regex;
use std::fs;

fn read_input() -> String {
    return fs::read_to_string("src/../../inputs/day4.txt")
        .expect("Something went wrong reading the file");
}

fn parse_input(input: String) -> Vec<Vec<Vec<i32>>> {
    let sperated_by_line = input
        .replace(":", "|")
        .split("\n")
        .map(|x| x.to_string())
        .collect::<Vec<String>>();

    return sperated_by_line
        .iter()
        .map(|x| {
            x.split("|")
                .map(|x| {
                    Regex::new(r"\d+")
                        .unwrap()
                        .find_iter(x)
                        .map(|x| x.as_str().parse::<i32>().unwrap())
                        .collect::<Vec<_>>()
                })
                .collect::<Vec<_>>()
        })
        .collect::<Vec<_>>();
}

fn solve_part_1(input: Vec<Vec<Vec<i32>>>) -> i32 {
    return input
        .iter()
        .map(|x| {
            let 당첨번호들 = &x[1];
            let 내_번호들 = &x[2];

            return 내_번호들
                .iter()
                .fold(0, |acc, x| {
                    if 당첨번호들.contains(x) {
                        return acc + 1;
                    }
                    return acc;
                })
                .clone();
        })
        .collect::<Vec<_>>()
        .iter()
        .fold(0, |acc, x| match *x as i32 {
            0 => acc + 0,
            _ => acc + 2_i32.pow(*x - 1),
        });
}

fn solve_part_2(input: Vec<Vec<Vec<i32>>>) -> i32 {
    return 2;
}

pub fn run() -> (i32, i32) {
    let input = read_input();
    let parsed_input = parse_input(input);

    let part_1_result = solve_part_1(parsed_input.clone());
    let part_2_result = solve_part_2(parsed_input.clone());

    return (part_1_result, part_2_result);
}
