<?php

use PHPUnit\Framework\TestCase;

require_once('./src/TempTracker.php');

class TempTrackerTest extends TestCase {
    public function test_something() {
        $this->assertEquals(42, 42);
    }

    public function test_temp_type() {
        $temp = new TempTracker();
        $this->expectException(TypeError::class);
        $temp->insert("2");
    }

    public function test_interval() {
        $temp = new TempTracker();
        $this->expectException(ValueError::class);
        $temp->insert(120);
    }

    public function test_result() {
        $temp = new TempTracker();
        $this->expectException(ValueError::class);
        $temp->get_mean();
    }
}