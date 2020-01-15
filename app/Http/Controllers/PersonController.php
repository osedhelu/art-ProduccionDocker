<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Person;
class PersonController extends Controller
{
    public function index()
    {
        $person = Person::all();
        return $person;

    }
    public function store(Request $request)
    {
        $person = new Person();
        $person->name = $request->name;
        $person->lastname = $request->lastname;
        $person->activity = $request->activity;
        $person->condition = 1;
        $person->save();
        
    }


    public function update(Request $request)
    {
        $person = Person::findOrFail($request->id);
        $person->name = $request->name;
        $person->lastname = $request->lastname;
        $person->activity = $request->activity;
        $person->condition = 1;
        $person->save();
    }
    public function activer(Request $request)
    {
        $person = Person::findOrFail($request->id);
        $person->condition = 1;
        $person->save();
    }
    public function desactivar(Request $request)
    {
        $person = Person::findOrFail($request->id);
        $person->condition = 0;
        $person->save();
    }
}
