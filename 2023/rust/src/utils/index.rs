use std::fs;

pub fn read_input(day: usize) -> String {
    return fs::read_to_string(format!("src/../../inputs/day{}.txt", day))
        .expect("Something went wrong reading the file");
}
